import { useWalletClient, usePublicClient } from 'wagmi';
import { useState } from 'react';
import { Hash } from 'viem';

interface TransactionStep {
  chainId: number;
  to: string;
  data: string;
  value: string;
  gas?: string;
}

interface TransactionResult {
  data: {
    steps: TransactionStep[];
  };
}

interface TransactionError {
  message: string;
  step?: number;
  chainId?: number;
}

const TransactionExecutor = () => {
  const { data: walletClient } = useWalletClient();
  const publicClient = usePublicClient();
  const [transactionResults, setTransactionResults] = useState<TransactionResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [executing, setExecuting] = useState(false);
  const [error, setError] = useState<TransactionError | null>(null);
  const [completedSteps, setCompletedSteps] = useState<number>(0);

  const fetchTransactionDetails = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch("/api/create-transaction", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "swap 1 ETH for USDC on base",
          address: await walletClient?.account.address,
        }),
      });

      if (!response.ok) {
        throw new Error(`API Error: ${response.statusText}`);
      }

      const data = await response.json();
      setTransactionResults(data);
    } catch (error) {
      setError({
        message: error instanceof Error ? error.message : 'Failed to fetch transaction details'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleTransaction = async () => {
    if (!walletClient || !publicClient) {
      setError({ message: 'Wallet not connected' });
      return;
    }

    if (transactionResults.length === 0) {
      setError({ message: 'No transaction details available' });
      return;
    }

    setExecuting(true);
    setError(null);
    setCompletedSteps(0);

    try {
      for (let resultIndex = 0; resultIndex < transactionResults.length; resultIndex++) {
        const result = transactionResults[resultIndex];
        for (let stepIndex = 0; stepIndex < result.data.steps.length; stepIndex++) {
          const step = result.data.steps[stepIndex];
          try {
            const txParams = {
              account: walletClient.account,
              to: step.to as `0x${string}`,
              data: step.data as `0x${string}`,
              value: BigInt(step.value || '0'),
              chainId: step.chainId,
            };

            const hash = await walletClient.sendTransaction(txParams);

            if (hash) {
              await publicClient.waitForTransactionReceipt({
                hash: hash as Hash,
              });
              
              setCompletedSteps(prev => prev + 1);
            }
          } catch (stepError) {
            setError({
              message: stepError instanceof Error ? stepError.message : 'Transaction failed',
              step: stepIndex + 1,
              chainId: step.chainId,
            });
            throw stepError;
          }
        }
      }
    } catch (error) {
      console.error('Transaction execution failed:', error);
    } finally {
      setExecuting(false);
    }
  };

  const totalSteps = transactionResults.reduce(
    (total, result) => total + result.data.steps.length, 
    0
  );

  return (
    <div className="space-y-4 text-center">
      <div className="flex gap-4 justify-center">
        <button
          onClick={fetchTransactionDetails}
          disabled={loading}
          className={`px-6 py-3 rounded-full text-lg font-semibold ${
            loading
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-green-400 text-black cursor-pointer hover:bg-green-500"
          }`}
        >
          {loading ? "Fetching..." : "Fetch Transaction Details"}
        </button>
        
        <button
          onClick={handleTransaction}
          disabled={executing || transactionResults.length === 0}
          className={`px-6 py-3 rounded-full text-lg font-semibold ${
            executing || transactionResults.length === 0
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-green-400 text-black cursor-pointer hover:bg-green-500"
          }`}
        >
          {executing ? "Executing..." : "Execute Transactions"}
        </button>
      </div>

      {error && (
        <div className="bg-red-900/50 border border-red-500 rounded-lg p-4 mx-auto max-w-2xl">
          <p className="text-red-400">{error.message}</p>
          {error.step && (
            <p className="text-red-400 mt-2">
              Failed at step {error.step} {error.chainId ? `(Chain ID: ${error.chainId})` : ''}
            </p>
          )}
        </div>
      )}

      {executing && (
        <div className="bg-green-900/50 border border-green-500 rounded-lg p-4 mx-auto max-w-2xl">
          <p className="text-green-400">
            Progress: {completedSteps} / {totalSteps} steps completed
          </p>
        </div>
      )}

      {transactionResults.length > 0 && (
        <div className="mt-4 max-w-2xl mx-auto">
          <h3 className="text-lg font-semibold text-white mb-2">Transaction Details:</h3>
          <pre className="bg-gray-900 p-4 rounded-lg overflow-auto text-left text-gray-300">
            {JSON.stringify(transactionResults, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};

export default TransactionExecutor;
/**
 * Mock Phantom Wallet Service
 * 
 * This service simulates backend interactions with a Solana Phantom Wallet.
 * It provides methods for connecting, disconnecting, and signing transactions
 * without actual blockchain interaction.
 */

// Simulated wallet state
let isConnected = false;
let publicKey = null;

const MOCK_DELAY = 800; // ms to simulate network latency

export const PhantomWalletService = {
    /**
     * Checks if Phantom is widely available in the window object
     */
    isPhantomInstalled: () => {
        return true; // Pretend it's always installed
    },

    /**
     * Simulates a connection request to the Phantom wallet
     */
    connect: async () => {
        console.log('[WalletBackend] Initiating connection...');

        return new Promise((resolve) => {
            setTimeout(() => {
                isConnected = true;
                // Generate a fake Solana public key
                publicKey = "FnY8...2XjT";
                console.log('[WalletBackend] Connected successfully.', { publicKey });
                resolve({
                    publicKey: "FnY8...2XjT",
                    isConnected: true
                });
            }, MOCK_DELAY);
        });
    },

    /**
     * Simulates disconnecting the wallet
     */
    disconnect: async () => {
        console.log('[WalletBackend] Disconnecting...');

        return new Promise((resolve) => {
            setTimeout(() => {
                isConnected = false;
                publicKey = null;
                console.log('[WalletBackend] Disconnected.');
                resolve(true);
            }, MOCK_DELAY / 2);
        });
    },

    /**
     * Simulates signing a message
     * @param {string} message - The message to sign
     */
    signMessage: async (message) => {
        if (!isConnected) {
            throw new Error("Wallet not connected");
        }

        console.log('[WalletBackend] Signing message:', message);

        return new Promise((resolve) => {
            setTimeout(() => {
                // Return a fake signature
                const mockSignature = "4d5f...3a2b";
                console.log('[WalletBackend] Message signed.', { signature: mockSignature });
                resolve({
                    signature: mockSignature,
                    message: message
                });
            }, MOCK_DELAY);
        });
    },

    /**
     * Simulates sending a transaction on Solana
     * @param {string} recipientAddress 
     * @param {number} amount 
     */
    sendTransaction: async (recipientAddress, amount) => {
        if (!isConnected) {
            throw new Error("Wallet not connected");
        }

        console.log(`[WalletBackend] Processing transaction: Sending ${amount} SOL to ${recipientAddress}`);

        return new Promise((resolve) => {
            setTimeout(() => {
                const mockTxHash = "5G7x...9L2p";
                console.log('[WalletBackend] Transaction confirmed.', { txHash: mockTxHash });
                resolve({
                    signature: mockTxHash,
                    status: "confirmed"
                });
            }, MOCK_DELAY * 2);
        });
    }
};

export default PhantomWalletService;

import { WalletTransferBody } from "../interfaces/Wallet/WalletInterface";
import apiAdapter from "../utils/ApiAdapter";
import url from "../utils/url";

export const topUpWallet = async (body: {}) => {
  try {
    const apiTopUpWallet = apiAdapter(url);
    const res = await apiTopUpWallet.post(`/api/wallets/top-up`, body);
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const walletTransfer = async (body: WalletTransferBody) => {
  try {
    const apiWalletTransfer = apiAdapter(url);
    const res = await apiWalletTransfer.post(`/api/wallets/send`, body);
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const getTransactions = async (userId: number | undefined) => {
  try {
    const apiWalletTransfer = apiAdapter(url);
    const res = await apiWalletTransfer.get(
      `/api/wallets/transactions/` + userId
    );
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};

export const getWalletBalance = async (userId: number | undefined) => {
  try {
    const apiWalletTransfer = apiAdapter(url);
    const res = await apiWalletTransfer.get(
      `/api/wallets/wallet_balance/` + userId
    );
    return res;
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    }
  }
};
import { API_URL } from "../config";

export const createTransaction = async (transaction) => {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};

export const getTransactions = async () => {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};

export const getSingleTransaction = async (id) => {
  try {
    const res = await fetch(API_URL + "/" + id);
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};

export const deleteSingleTransaction = async (id) => {
  try {
    const res = await fetch(API_URL + "/" + id, {
      method: "DELETE",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};

export const updateSingleTransaction = async (transaction) => {
  try {
    const res = await fetch(API_URL + "/" + transaction._id, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(transaction),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false, error };
  }
};

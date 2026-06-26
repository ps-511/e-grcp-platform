import vendors from "../mocks/vendors.json";

const vendorService = {
  getAllVendors: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(vendors);
      }, 700);
    });
  },
};

export default vendorService;
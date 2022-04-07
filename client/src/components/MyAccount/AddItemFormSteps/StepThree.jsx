import { Link } from "react-router-dom";
import { useEffect } from "react";
import { myAccountPath, profilePath } from "../../../utilities/paths";
import Select from "react-select";
import { customStyles } from "../../../utilities/selectStyle";
import { countryList } from "../../../utilities/countryList";
import LoadingSpinner from "../../LoadingSpinner";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "../../../contexts/UserContextProvider";

const StepThree = ({
  prevStep,
  productDetails,
  setProductDetails,
  handleInputData,
  handlePostItem,
  isLoading,
}) => {
  const { user } = useUserContext();

  useEffect(() => {
    setProductDetails({
      ...productDetails,
      address: user.address === null ? "" : user.address,
      email: user.email,
      phone: user.phone === null ? "" : user.phone,
      city: user.city === null ? "" : user.city,
      country: user.country === null ? "" : user.country,
      zipCode: user.zipCode === null ? "" : user.zipCode,
    });
  }, [user]);

  const handleCountryChange = (selectedOption) => {
    setProductDetails({ ...productDetails, country: selectedOption.value });
  };

  return (
    <div className="border-2 pb-16 font-normal">
      <div className="py-6 bg-bgWhite mb-12">
        <h2 className="text-center text-2xl font-bold leading-7">
          LOCATION & SHIPPING
        </h2>
      </div>

      <div className="px-24">
        <label className="text-lg leading-7">Address</label>
        <div className="border-2 h-16 mb-8 mt-4">
          <input
            type="text"
            className="w-full h-full outline-none px-6 bg-bgWhite"
            placeholder="123 Main Street"
            value={productDetails.address}
            onChange={handleInputData("address")}
          />
        </div>

        <label className="text-lg leading-7">Email</label>
        <div className="border-2 h-16 mb-8 mt-4">
          <input
            type="email"
            className="w-full h-full outline-none px-6 bg-bgWhite"
            placeholder="user@domain.com"
            value={productDetails.email}
            onChange={handleInputData("email")}
          />
        </div>

        <div className="flex space-x-6 mb-8">
          <div className=" flex-1  flex flex-col">
            <label className="text-lg leading-7">City</label>
            <input
              type="text"
              placeholder="eg. Madrid"
              className="w-full border-2 h-16 p-6 mt-4 bg-bgWhite outline-none"
              value={productDetails.city}
              onChange={handleInputData("city")}
            />
          </div>

          <div className=" flex-1  flex flex-col">
            <label className="text-lg leading-7">Zip Code</label>
            <input
              type="number"
              placeholder="XXXXXX"
              className="w-full border-2 h-16 p-6 mt-4 bg-bgWhite outline-none"
              value={productDetails.zipCode}
              onChange={handleInputData("zipCode")}
            />
          </div>
        </div>

        <label className="text-lg leading-7">Country</label>
        <Select
          defaultValue={countryList.find(
            (country) => country.value === user.country
          )}
          options={countryList}
          onChange={handleCountryChange}
          className="mb-8 mt-4"
          placeholder="eg. Spain"
          styles={customStyles}
          components={{
            IndicatorSeparator: () => null,
          }}
        />

        <label className="text-lg leading-7">Phone Number</label>
        <div className="border-2 h-16 mb-8 mt-4">
          <input
            type="number"
            className="w-full h-full outline-none px-6 bg-bgWhite"
            placeholder="+32534231564"
            value={productDetails.phone}
            onChange={handleInputData("phone")}
          />
        </div>

        <div className="flex space-x-6 text-lg font-bold leading-7 items-center">
          <div className="flex-1">
            <Link
              to={myAccountPath + profilePath}
              className="text-center border-4 py-3 px-8"
            >
              Cancel
            </Link>
          </div>
          {isLoading ? (
            <LoadingSpinner width={"w-12 h-12"} />
          ) : (
            <div className="flex-1 flex space-x-6">
              <button
                className="flex-1 bg-purple py-3 text-white"
                onClick={prevStep}
              >
                Back
              </button>

              <button
                onClick={handlePostItem}
                className="flex-1 bg-purple py-3 text-white"
              >
                Done
              </button>
            </div>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default StepThree;
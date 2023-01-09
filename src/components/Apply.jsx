


const Apply = () => {

  return (
    <>
      <div
        className="py-24 border px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6"
        id="contact"
      >
        <h1 className=" text-center mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">
          OnlyFans Management Application
        </h1>
        <p className=" text-center mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          If you'd like us to skyrocket your OnlyFans earnings rapidly, fill out
          this form, and we'll get back to you within 24 hours. The form is long
          intentionally, as we are looking for long-term clients who aren't
          afraid of work.
        </p>

        <form id="applyForm">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Name *
            </label>
            <input
              type="text"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What should we call you?"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="reach"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How can we reach you the best? *
            </label>
            <input
              type="text"
              id="reach"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instagram/Telegram/WhatsApp/Email"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="sm"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Link to social media *
            </label>
            <input
              type="text"
              id="sm"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="location"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Where are you from? *
            </label>
            <input
              type="text"
              id="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Location"
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="language"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Which languages can you speak?
            </label>
            <div className="flex items-center mb-4">
              <input
                id="language"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="language"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                English
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="language"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="language"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                German
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="language"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="language"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Other
              </label>
            </div>
          </div>
          <br />
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Do you have a partner/husband/boyfriend, who is giving you advice
            </label>
            <div className="flex items-center mb-4">
              <input
                id="partner"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="partner"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yes
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="partner"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="partner"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No
              </label>
            </div>
          </div>
          <br />
          <div className="mb-6">
            <label
              htmlFor="bringSocialMedia"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Do you bring your own social media accounts, or should we create
              some for you?
            </label>
            <div className="flex items-center mb-4">
              <input
                id="bringSocialMedia"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bringSocialMedia"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yes
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="bringSocialMedia"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bringSocialMedia"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="bringSocialMedia"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="bringSocialMedia"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Some
              </label>
            </div>

            <br />
          </div>

          <div className="mb-6">
            <label
              htmlFor="verified"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Do you have already a verified OnlyFans / Fansly / DarkFans/
              something else? *
            </label>
            <div className="flex items-center mb-4">
              <input
                id="verified"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="verified"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yes
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="verified"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="verified"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                No
              </label>
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="blockedCountries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Which countries do you want blocked from OnlyFans?
            </label>
            <input
              type="text"
              id="blockedCountries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="hoursDayAvailable"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How many hours do you have available per day?
            </label>
            <input
              type="number"
              id="hoursDayAvailable"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g., 6"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="weekContent"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How many Videos/Pictures/TikToks can you create in one Week?
            </label>
            <input
              type="number"
              id="weekContent"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g., 23"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="upsellTime"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              On a normal day, how long will it take until you can create a
              regular upsell for a customer?
            </label>
            <input
              type="number"
              id="upsellTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="number in hours"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="contentPlan"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Can you create content on your own, or should we provide you a
              content plan for each day?
            </label>
            <div className="flex items-center mb-4">
              <input
                id="contentPlan"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="contentPlan"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I can come up with content ideas on my own
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="contentPlans"
                type="checkbox"
                value=""
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="contentPlan"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I'd like help
              </label>
            </div>
          </div>

          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            What else should we know?
          </label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
          ></textarea>

          <div className="mt-3 text-center">
            <button
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
            >
              Submit Survey
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Apply;

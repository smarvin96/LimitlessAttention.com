import { useState } from "react";

const Apply = () => {
  const [name, setName] = useState("");
  const [reach, setReach] = useState("");
  const [sm, setSm] = useState("");
  const [location, setLocation] = useState("");
  
// Language
  const [english, setEnglish] = useState(false);
  const [german, setGerman] = useState(false);
  const [other, setOther] = useState(false);

  const [partner, setPartner] = useState("");
  const [bringSocialMedia, setBringSocialMedia] = useState("");
  const [verified, setVerified] = useState("");
  const [blockedCountries, setBlockedCountries] = useState("");
  const [hoursDayAvailable, setHoursDayAvailable] = useState("");
  const [weekContent, setWeekContent] = useState("");
  const [upsellTime, setUpsellTime] = useState("");
  const [contentPlan, setContentPlan] = useState("");
  const [message, setMessage] = useState("");

  const [loader, setLoader] = useState(false);

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
        {/* onSubmit={handleSubmit} */}
        <form
          id="applyForm"
          action="https://formspree.io/f/mdovorpg"
          method="POST"
        >
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
              name="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="What should we call you?"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              name="reach"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Instagram/Telegram/WhatsApp/Email"
              required
              value={reach}
              onChange={(e) => setReach(e.target.value)}
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
              name="sm"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
              value={sm}
              onChange={(e) => setSm(e.target.value)}
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
              name="location"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
                id="languageEnglish"
                name="languageEnglish"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                value="yes"
                onChange={() => setEnglish(!english)}
              />
              <label
                htmlFor="languageEnglish"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                English
              </label>
            </div>

            <div className="flex items-center mb-4">
              <input
                id="languageGerman"
                name="languageGerman"
                type="checkbox"
                value="yes"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => setGerman(!german)}
              />
              <label
                htmlFor="languageGerman"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                German
              </label>
            </div>
            <div className="flex items-center mb-4">
              <input
                id="languageOther"
                name="languageOther"
                type="checkbox"
                value="yes"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={() => setOther(!other)}
              />
              <label
                htmlFor="languageOther"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Other
              </label>
            </div>
          </div>
          <br />
          <div className="mb-6">
            <label
              htmlFor="partner"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Do you have a partner/husband/boyfriend, who is giving you advice?
            </label>
            <div className="flex items-center mb-4">
              <input
                id="partner"
                name="partner"
                type="checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                onChange={(e) => setLanguage(e.target.value)}
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
                name="partner"
                type="checkbox"
                value={partner}
                onChange={(e) => setPartner(e.target.value)}
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
                name="bringSocialMedia"
                type="checkbox"
                value={bringSocialMedia}
                onChange={(e) => setBringSocialMedia(e.target.value)}
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
                name="bringSocialMedia"
                type="checkbox"
                value={bringSocialMedia}
                onChange={(e) => setBringSocialMedia(e.target.value)}
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
                name="bringSocialMedia"
                type="checkbox"
                value={bringSocialMedia}
                onChange={(e) => setBringSocialMedia(e.target.value)}
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
              Do you already have a verified account on Onlyfans / Fansly /
              DarkFans or something else? *
            </label>
            <div className="flex items-center mb-4">
              <input
                id="verified"
                name="verified"
                type="checkbox"
                value={verified}
                onChange={(e) => setVerified(e.target.value)}
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
                name="verified"
                type="checkbox"
                value={verified}
                onChange={(e) => setVerified(e.target.value)}
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
              name="blockedCountries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Germany/UK"
              value={blockedCountries}
              onChange={(e) => setBlockedCountries(e.target.value)}
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
              name="hoursDayAvailable"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g., 6"
              value={hoursDayAvailable}
              onChange={(e) => setHoursDayAvailable(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="weekContent"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              How many Videos/Pictures/TikToks can you create in one week?
            </label>
            <input
              type="number"
              id="weekContent"
              name="weekContent"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="e.g., 23"
              value={weekContent}
              onChange={(e) => setWeekContent(e.target.value)}
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
              name="upsellTime"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="number in hours"
              value={upsellTime}
              onChange={(e) => setUpsellTime(e.target.value)}
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
                name="contentPlan"
                type="checkbox"
                value={contentPlan}
                onChange={(e) => setContentPlan(e.target.value)}
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
                id="contentPlan"
                name="contentPlan"
                type="checkbox"
                value={contentPlan}
                onChange={(e) => setContentPlan(e.target.value)}
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
            name="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder=""
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>

          <div className="mt-3 pt-5 text-center">
            <button
              style={{ background: loader ? "#green" : "#orange" }}
              type="submit"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-2xl px-6 py-3.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
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

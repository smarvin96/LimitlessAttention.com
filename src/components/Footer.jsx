const Footer = () => {
  return (
    <>
      <footer className="p-4 bg-white sm:p-6 dark:bg-gray-800">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between" id="footerModal">
            {/* <!-- Modal toggle --> */}
            <button
              data-modal-target="footerModal"
              data-modal-toggle="defaultModal"
              className="block text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
              type="button"
            >
              Imprint
            </button>

            {/* <!-- Main modal --> */}
            <div
              id="defaultModal"
              tabIndex="-1"
              aria-hidden="true"
              className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
            >
              <div className="relative w-full h-full max-w-2xl md:h-auto">
                {/* <!-- Modal content --> */}
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                  {/* <!-- Modal header --> */}
                  <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      Angaben gem&auml;&szlig; &sect; 5 TMG
                    </h3>
                    <button
                      type="button"
                      className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      data-modal-hide="defaultModal"
                    >
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span className="sr-only">Close modal</span>
                    </button>
                  </div>
                  {/* <!-- Modal body --> */}
                  <div className="p-6 space-y-6">
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Marvin Sprenger
                      <br />
                      Wittmundstr. 30
                      <br />
                      33129 Delbr&uuml;ck
                    </p>

                    <h2>Kontakt</h2>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Telefon: +49 1577 3602652
                      <br />
                      E-Mail: sprenger-marvin@outlook.de
                    </p>

                    <h2>Umsatzsteuer-ID</h2>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect;
                      27 a Umsatzsteuergesetz:
                      <br />
                      beantragt.
                    </p>

                    <br />
                    <h2>EU-Streitschlichtung</h2>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Die Europ&auml;ische Kommission stellt eine Plattform zur
                      Online-Streitbeilegung (OS) bereit:
                      <a
                        href="https://ec.europa.eu/consumers/odr/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://ec.europa.eu/consumers/odr/
                      </a>
                      <br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>

                    <h2>
                      Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
                    </h2>
                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                      Wir nehmen an einem Streitbeilegungsverfahren vor einer
                      Verbraucherschlichtungsstelle teil. Zust&auml;ndig ist die
                      Universalschlichtungsstelle des Zentrums f&uuml;r
                      Schlichtung e.V., Stra&szlig;burger Stra&szlig;e 8, 77694
                      Kehl am Rhein (
                      <a
                        href="https://www.verbraucher-schlichter.de"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        https://www.verbraucher-schlichter.de
                      </a>
                      ).
                    </p>
                  </div>
                  {/* <!-- Modal footer --> */}
                  <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button
                      data-modal-hide="defaultModal"
                      type="button"
                      className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023 
              <a href="https://www.instagram.com/limitlessattention/" target="_blank"className="hover:underline pl-2">
                limitlessattention.com™
              </a>
              <div> All Rights Reserved.</div>
            </span>
            <div></div>

            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="https://www.instagram.com/limitlessattention/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

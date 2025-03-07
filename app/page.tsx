"use client";
import { useCallback } from 'react';
import Head from 'next/head';
import styles from '@/app/styles/Home.module.css';
import FHIR from "fhirclient";
import { launchOptions } from "@/config/config";
import IMeldRxLaunchData from '@/config/IMeldRxLaunchData';
import Link from 'next/link';
export default function Page() {
  // When a button is pressed, tries to authorize based on the given configuration data...
  const onLaunchClick = useCallback((launchData: IMeldRxLaunchData) => {
    console.log(JSON.stringify(launchData));
    const fhirUrl = launchData.workspaceUrl;
    FHIR.oauth2.authorize({
        clientId: launchData.clientId,
        scope: launchData.scope,
        redirectUri: launchData.redirectUrl,
        iss: fhirUrl,
    });
  }, [FHIR]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-semibold text-gray-900">Med Vision</h1>
            <nav className="flex space-x-4">
              <Link href="/" className="text-blue-600 font-medium">Home</Link>
              <Link href="/triage" className="text-gray-500 hover:text-gray-700">Triage</Link>
              <Link href="/about" className="text-gray-500 hover:text-gray-700">About</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-700">Contact</Link>
              {launchOptions.map((launchConfiguration: IMeldRxLaunchData, index: number) => {
                  return (
                    <LaunchButton
                      key={`launch-button-${index}`}
                      label="Launch with MeldRx"
                      color="green"
                      onClick={() => onLaunchClick(launchConfiguration)}
                    />
                  );
              })}
            </nav>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Video Consultation
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Connect with our medical professionals through a secure video consultation
            </p>
          </div>
          

          <div className="bg-white shadow-xl rounded-lg overflow-hidden max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready for your consultation?</h3>
                <p className="text-gray-600 mb-6">
                  Our AI-powered medical triage system will guide you through your symptoms and connect you with the appropriate care.
                </p>
                <ul className="space-y-3 text-gray-600 mb-8">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Secure and private video connection
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    AI-powered symptom assessment
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Personalized medical guidance
                  </li>
                </ul>
                <Link 
                  href="/triage" 
                  className="px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start Consultation
                </Link>
              </div>
              <div className="bg-blue-600 p-8 md:p-12 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="mb-4">
                    <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold mb-2">How it works</h3>
                  <p className="opacity-80">
                    Click the "Start Consultation" button to begin your video consultation. Our AI assistant will guide you through a series of questions to understand your symptoms and provide appropriate medical guidance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 1: Start Consultation</h3>
              <p className="text-gray-600">
                Click the "Start Consultation" button to begin your video session with our AI medical assistant.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 2: Describe Symptoms</h3>
              <p className="text-gray-600">
                Describe your symptoms and answer the AI assistant's questions to help assess your condition.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Step 3: Receive Guidance</h3>
              <p className="text-gray-600">
                Get personalized medical guidance and recommendations based on your symptoms and medical history.
              </p>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-50 border-t">
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center md:justify-start space-x-6">
              <Link href="/privacy" className="text-gray-400 hover:text-gray-500">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-400 hover:text-gray-500">Terms of Service</Link>
              <Link href="/contact" className="text-gray-400 hover:text-gray-500">Contact</Link>
            </div>
            <p className="mt-8 text-center text-base text-gray-400 md:mt-0">
              &copy; 2023 Med Vision. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );

  // return (
  //   <>
  //     <Head>
  //       <title>Patient Sphere</title>
  //       <meta name="description" content="Generated by MeldRx (https://meldrx.com)" />
  //       <meta name="viewport" content="width=device-width, initial-scale=1" />
  //       <link rel="icon" href="/favicon.ico" />
  //     </Head>
  //     <main className={styles.main}>
  //         <div className="min-h-screen flex flex-col items-center bg-gray-50 p-6 relative overflow-hidden sm:py-12">
  //           <img src="/images/darena-logo.png" className="rounded-lg" style={{ maxHeight: "50px" }} />
  //           <h1 className="text-3xl font-bold text-center">Welcome to the Patient Sphere</h1>
  //           <div className="mt-6"></div>

  //           <div className="flex justify-center overflow-x-auto sm:rounded-lg my-2 w-3/4">
  //             {/* Loop through launch configuration */}
  //             {launchOptions.map((launchConfiguration: IMeldRxLaunchData, index: number) => {
  //                 return (
  //                   <LaunchButton
  //                     key={`launch-button-${index}`}
  //                     label="Launch with MeldRx"
  //                     color="green"
  //                     onClick={() => onLaunchClick(launchConfiguration)}
  //                   />
  //                 );
  //             })}
  //           </div>
  //         </div>
  //     </main>
  //   </>
  // )
}

// Button that launches the app...
interface ILaunchButtonProps { label: string; color: "blue" | "green" | "red" | "orange" | "indigo"; onClick: () => void; };
function LaunchButton(props: ILaunchButtonProps) {

  const cssBlue = "my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300";
  const cssGreen = "my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-green-700 rounded-lg hover:bg-green-800 focus:ring-4 focus:ring-green-300";
  const cssRed = "my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300";
  const cssOrange = "my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-orange-700 rounded-lg hover:bg-orange-800 focus:ring-4 focus:ring-orange-300";
  const cssIndigo = "my-3 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300";

  // Select CSS based on passed in color...
  let css = cssBlue;
  if (props.color === "blue") { css = cssBlue; }
  else if (props.color === "green") { css = cssGreen; }
  else if (props.color === "red") { css = cssRed; }
  else if (props.color === "orange") { css = cssOrange; }
  else if (props.color === "indigo") { css = cssIndigo; }

  return (
    <button onClick={props.onClick}
      className={css}>
      {props.label}
    </button>
  );
}
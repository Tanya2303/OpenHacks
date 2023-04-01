import React, { useState } from "react"
import { format } from "date-fns"

export default function Profile(props) {

  const [showDonateDetails, setShowDonateDetails] = useState(false);

  return (
    <div className="mx-4">
      <article className="bg-white p-5 rounded shadow shadow-emerald-300">
        <div className="flex items-center">
          <img
            src={props.owner.avatar_url}
            alt={props.owner.login}
            className="w-16 h-16 shadow rounded-full"
          />
          <ul className="ml-5">
            <li>
              <h2 className="font-bold text-xl">{props.owner.login}</h2>
            </li>
            <div>
              <p className="mr-2">{props.name}</p>
              {props.private ? (
                <p className="bg-rose-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75">
                  Private
                </p>
              ) : (
                <p className="bg-emerald-700 py-1 px-2 rounded-lg shadow text-white text-xs inline-block opacity-75 mr-2">
                  Public
                </p>
              )}
            </div>
          </ul>
        </div>

        <div>
          <p className="mt-5">
            This repository was created on{" "}
            {format(new Date(props.created_at), "dd MMMM yyyy")} by{" "}
            {props.owner.login}
          </p>
        </div>

        <div className="mt-5 flex items-center justify-between text-right">
          <a
            className="underline text-sm"
            href={props.html_url}
            target="_blank"
            rel="noreferrer"
          >
            View Repo
          </a>
          <ul>
            <li>{props.stargazers_count.toLocaleString()} stars</li>
            <li>{props.watchers_count.toLocaleString()} Watchers</li>
          </ul>
        </div>

        <div className="flex items-center justify-between flex-wrap mt-5">
          <ul className="text-xs flex items-center justify-start">
            <li className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2">
              {props.language}
            </li>

            {props.topics &&
              props.topics.map((topic, index) => (
                <React.Fragment key={index}>
                  <li className="py-1 px-2 text-white bg-emerald-700 opacity-75 rounded-lg shadow inline-block mr-2">
                    {topic}
                  </li>
                </React.Fragment>
              ))}
          </ul>

          <p className="cursor-pointer">{props.open_issues} issues</p>
          <button onClick={() => setShowDonateDetails(true)} className="bg-emerald-700 py-1 px-2 rounded-lg shadow text-white text-md inline-block opacity-75">Automate Alerts</button>
          {showDonateDetails ? (
            <div>
              <div className="flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none items-center justify-center w-screen">
                <div className="relative my-6 mx-auto w-screen">
                  <div className="ml-[33rem] w-[25rem] border-0 rounded-xl  shadow-lg relative flex flex-col w-128 bg-primary outline-none focus:outline-none ">
                    <div className="flex items-start justify-between p-5 border-solid rounded-t">
                      <div>
                        <div className="text-2xl font-base tracking-wide cursor-pointer text-white">
                          Automate Alert Settings
                        </div>
                      </div>

                      <button
                        className="absolute right-6"
                        onClick={() => setShowDonateDetails(false)}
                        aria-hidden="false"
                        aria-label="button"
                      >
                        <HiX
                          className="h-7 w-7 text-white"
                          aria-hidden="false"
                        />
                      </button>
                    </div>

                    <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4 text-white">

                      <div className="flex flex-1">
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                          <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                        <p className="pl-20">Issues</p>
                      </div>

                      <div className="flex flex-1">
                        <div class="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
                          <input type="checkbox" name="toggle" id="toggle" class="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer" />
                          <label for="toggle" class="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                        </div>
                        <p className="pl-4">Pull Requests</p>
                      </div>

                      <a href="mailto:smith@exa.com"><button className="bg-blue-600 text-white py-2 px-8 rounded-md ml-2">
                        Activate
                      </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black"></div>
            </div>
          ) : null}
        </div>
      </article>
    </div>
  )
} import { HiX } from "react-icons/hi"
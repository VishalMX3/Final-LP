import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export default function DropDown() {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full px-4 pt-16 my-10">
      <div className="mx-auto w-full max-w-3xl rounded-2xl bg-transparent p-2 flex flex-col gap-5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className="text-xl">What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-6 w-6 text-purple-500 transition-all duration-300`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition ease-in-out duration-500 transform"
                enterFrom="-translate-y-[20px] opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-[20px] opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-300 transition-opacity duration-300">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex w-full justify-between rounded-lg px-4 py-2 text-left text-sm font-medium text-white focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                <span className="text-xl">What is your refund policy?</span>
                <ChevronUpIcon
                  className={`${
                    open ? "rotate-180 transform" : ""
                  } h-6 w-6 text-purple-500 transition-all duration-300`}
                />
              </Disclosure.Button>
              <Transition
                show={open}
                enter="transition ease-in-out duration-500 transform"
                enterFrom="-translate-y-[20px] opacity-0"
                enterTo="translate-y-0 opacity-100"
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="translate-y-0 opacity-100"
                leaveTo="-translate-y-[20px] opacity-0"
              >
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-gray-300 transition-opacity duration-300">
                  If you're unhappy with your purchase for any reason, email us
                  within 90 days and we'll refund you in full, no questions
                  asked.
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </div>
  );
}

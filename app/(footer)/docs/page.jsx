export default function Component() {
  return (
    <div className="w-full overflow-hidden bg-gray-50 dark:bg-gray-950">
      <div className="container space-y-6 px-4 py-12 text-center md:space-y-10 md:py-24">
        <div className="space-y-3">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Welcome to the Lupleg Docs
          </h1>
          <p className="mx-auto max-w-3xl text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            Everything you need to know about integrating Lupleg into your
            projects.
          </p>
        </div>
      </div>
      <div className="container grid items-start justify-center gap-4 px-4 md:gap-6 lg:gap-10">
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 md:gap-12 lg:gap-16 xl:gap-20">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" id="getting-started">
              Getting Started
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="installing-lupleg">
                  Installing Lupleg
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    To install Lupleg, you can use npm or yarn. Run the
                    following command in your terminal:
                  </p>
                  <div>npm install -g lupleg</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="initializing-lupleg">
                  Initializing Lupleg
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    After installing Lupleg, you need to initialize it in your
                    project. Navigate to your project directory and run the
                    following command:
                  </p>
                  <div>lupleg init</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="configuring-lupleg">
                  Configuring Lupleg
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    Lupleg can be configured using the
                    <div>lupleg config</div>
                    command. You can set various options such as the theme,
                    language, and behavior of Lupleg.
                  </p>
                  <div>lupleg config</div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" id="api-reference">
              API Reference
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="lupleg-client">
                  Lupleg Client
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    The Lupleg Client is the interface through which you can
                    interact with Lupleg. It provides methods for sending
                    messages, handling prompts, and customizing the behavior of
                    Lupleg.
                  </p>
                  <div>import LuplegClient from 'lupleg';</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="lupleg-api">
                  Lupleg API
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    The Lupleg API allows you to extend the functionality of
                    Lupleg by creating custom prompts, commands, and
                    integrations. It provides a set of methods and components
                    for building interactive messages and workflows.
                  </p>
                  <div>import LuplegAPI from 'lupleg';</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="lupleg-utils">
                  Lupleg Utils
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    The Lupleg Utils package provides a collection of utility
                    functions and components for common tasks such as parsing
                    messages, formatting data, and rendering UI elements.
                  </p>
                  <div>
                    {`
                                    import '} from '@lupleg/utils';
                                  `}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" id="tutorials">
              Tutorials
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <div className="space-y-2">
                <h3
                  className="text-xl font-bold"
                  id="creating-your-first-prompt"
                >
                  Creating your first prompt
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    In this tutorial, you will learn how to create a simple
                    prompt that asks the user for their name and then displays a
                    personalized message.
                  </p>
                  <div>## Welcome to Lupleg Please enter your name:</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3
                  className="text-xl font-bold"
                  id="integrating-lupleg-with-your-website"
                >
                  Integrating Lupleg with your website
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    In this tutorial, you will learn how to integrate Lupleg
                    with your website so that you can add interactive messages
                    and prompts to your web pages.
                  </p>
                  <div>{`"<script src="https://cdn.lupleg.com/client.js\"></script>"`}</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3
                  className="text-xl font-bold"
                  id="customizing-the-lupleg-ui"
                >
                  Customizing the Lupleg UI
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    In this tutorial, you will learn how to customize the
                    appearance and behavior of the Lupleg UI to match your brand
                    and style.
                  </p>
                  <div>
                    import LuplegUI from 'lupleg'; import
                    'lupleg/dist/styles.css';
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold" id="best-practices">
              Best Practices
            </h2>
            <div className="space-y-4 text-gray-500 dark:text-gray-400">
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="organizing-your-prompts">
                  Organizing your prompts
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    To keep your prompts organized, you can create folders and
                    subfolders within the prompts directory. Lupleg will
                    automatically detect and load the prompts from these
                    folders.
                  </p>
                  <div>mkdir prompts touch prompts/hello.js</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold" id="writing-helpful-messages">
                  Writing helpful messages
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    When writing messages, it's important to be clear, concise,
                    and helpful. Users should be able to understand the
                    information provided in the message and know what action to
                    take.
                  </p>
                  <div>## Welcome to Lupleg Please enter your name:</div>
                </div>
              </div>
              <div className="space-y-2">
                <h3
                  className="text-xl font-bold"
                  id="managing-your-lupleg-workspace"
                >
                  Managing your Lupleg workspace
                </h3>
                <div className="space-y-2 text-sm leading-loose md:text-base xl:text-lg">
                  <p>
                    Lupleg provides a set of commands for managing your
                    workspace, including creating new prompts, editing existing
                    prompts, and publishing prompts to the Lupleg Hub.
                  </p>
                  <div>lupleg new lupleg edit lupleg publish</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

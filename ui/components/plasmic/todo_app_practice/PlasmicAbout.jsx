// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5BwtKaPW69DtLKD2yetQK2
// Component: kUJxIvpnpi
import * as React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import { usePlasmicDataOp } from "@plasmicapp/react-web/lib/data-sources";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import { CmsQueryRepeater } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: 8N9-WfZSaq/codeComponent
import { CmsRowField } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: w6HdOz-Pcn/codeComponent
import TextInput from "../../TextInput"; // plasmic-import: kXiqqwWiZ1v/component
import Button from "../../Button"; // plasmic-import: Hei_5iCMTfR/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_todo_app_practice.module.css"; // plasmic-import: 5BwtKaPW69DtLKD2yetQK2/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: kUJxIvpnpi/css

export const PlasmicAbout__VariantProps = new Array();

export const PlasmicAbout__ArgProps = new Array();

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());

const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicAbout__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();
  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "textInput.value",
        type: "private",
        variableType: "text",
        initFunc: ({ $props, $state, $queries, $ctx }) => ""
      }
    ],

    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });
  const new$Queries = {
    query: usePlasmicDataOp(
      (() => {
        try {
          return {
            sourceId: "5ZkLDBaAH7hdY9hQB2d5P3",
            opId: "507d4c57-99b0-4628-abaf-bd9089f35702",
            userArgs: {},
            cacheKey: "plasmic.$.8pVhI_COZ.$.",
            invalidatedKeys: null,
            roleId: null
          };
        } catch (e) {
          if (
            e instanceof TypeError ||
            e?.plasmicType === "PlasmicUndefinedDataError"
          ) {
            return undefined;
          } else {
            throw e;
          }
        }
      })()
    )
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);
  }
  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <div
              data-plasmic-name={"aboutContainer"}
              data-plasmic-override={overrides.aboutContainer}
              className={classNames(projectcss.all, sty.aboutContainer)}
            >
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  projectcss.all,
                  projectcss.h1,
                  projectcss.__wab_text,
                  sty.h1
                )}
              >
                {"ABOUT US"}
              </h1>
            </div>
          ) : null}
          <CmsQueryRepeater
            data-plasmic-name={"cmsDataFetcher"}
            data-plasmic-override={overrides.cmsDataFetcher}
            className={classNames("__wab_instance", sty.cmsDataFetcher)}
            desc={false}
            emptyMessage={
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__bnQwV
                    )}
                  >
                    {"No matching published entries found."}
                  </div>
                )}
              </ph.DataCtxReader>
            }
            forceEmptyState={false}
            forceLoadingState={false}
            limit={0}
            loadingMessage={
              <ph.DataCtxReader>
                {$ctx => (
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__aftxc
                    )}
                  >
                    {"Loading..."}
                  </div>
                )}
              </ph.DataCtxReader>
            }
            noAutoRepeat={false}
            noLayout={false}
            table={"aboutUs"}
            useDraft={false}
          >
            <ph.DataCtxReader>
              {$ctx => (
                <div className={classNames(projectcss.all, sty.freeBox__eUq27)}>
                  <CmsRowField
                    data-plasmic-name={"cmsEntryField"}
                    data-plasmic-override={overrides.cmsEntryField}
                    className={classNames("__wab_instance", sty.cmsEntryField)}
                    field={"about"}
                  />
                </div>
              )}
            </ph.DataCtxReader>
          </CmsQueryRepeater>
          {true ? (
            <div className={classNames(projectcss.all, sty.freeBox__sPkLp)}>
              <TextInput
                data-plasmic-name={"textInput"}
                data-plasmic-override={overrides.textInput}
                className={classNames("__wab_instance", sty.textInput)}
                onChange={async (...eventArgs) => {
                  ((...eventArgs) => {
                    p.generateStateOnChangeProp($state, ["textInput", "value"])(
                      (e => e.target?.value).apply(null, eventArgs)
                    );
                  }).apply(null, eventArgs);
                  (async event => {
                    const $steps = {};
                    $steps["updateTextInputValue"] = true
                      ? (() => {
                          const actionArgs = {
                            variable: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariable",
                                interactionUuid: "xJzw-egCp",
                                componentUuid: "kUJxIvpnpi",
                                argName: "variable"
                              },
                              () => ({
                                objRoot: $state,
                                variablePath: ["textInput", "value"]
                              })
                            ),
                            operation: __wrapUserFunction(
                              {
                                type: "InteractionArgLoc",
                                actionName: "updateVariable",
                                interactionUuid: "xJzw-egCp",
                                componentUuid: "kUJxIvpnpi",
                                argName: "operation"
                              },
                              () => 0
                            )
                          };
                          return __wrapUserFunction(
                            {
                              type: "InteractionLoc",
                              actionName: "updateVariable",
                              interactionUuid: "xJzw-egCp",
                              componentUuid: "kUJxIvpnpi"
                            },
                            () =>
                              (({
                                variable,
                                value,
                                startIndex,
                                deleteCount
                              }) => {
                                if (!variable) {
                                  return;
                                }
                                const { objRoot, variablePath } = variable;
                                p.set(objRoot, variablePath, value);
                                return value;
                              })?.apply(null, [actionArgs]),
                            actionArgs
                          );
                        })()
                      : undefined;
                    if (
                      typeof $steps["updateTextInputValue"] === "object" &&
                      typeof $steps["updateTextInputValue"].then === "function"
                    ) {
                      $steps["updateTextInputValue"] = await __wrapUserPromise(
                        {
                          type: "InteractionLoc",
                          actionName: "updateVariable",
                          interactionUuid: "xJzw-egCp",
                          componentUuid: "kUJxIvpnpi"
                        },
                        $steps["updateTextInputValue"]
                      );
                    }
                  }).apply(null, eventArgs);
                }}
                value={
                  p.generateStateValueProp($state, ["textInput", "value"]) ?? ""
                }
              />

              <Button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames("__wab_instance", sty.button)}
                color={"blue"}
                onClick={async event => {
                  const $steps = {};
                  $steps["runCode"] = true
                    ? (() => {
                        const actionArgs = {
                          customFunction: __wrapUserFunction(
                            {
                              type: "InteractionArgLoc",
                              actionName: "customFunction",
                              interactionUuid: "XAxurmS2H",
                              componentUuid: "kUJxIvpnpi",
                              argName: "customFunction"
                            },
                            () => () => {
                              return $queries.query.data.response.rows.push(
                                $state.textInput.value
                              );
                            }
                          )
                        };
                        return __wrapUserFunction(
                          {
                            type: "InteractionLoc",
                            actionName: "customFunction",
                            interactionUuid: "XAxurmS2H",
                            componentUuid: "kUJxIvpnpi"
                          },
                          () =>
                            (({ customFunction }) => {
                              return customFunction();
                            })?.apply(null, [actionArgs]),
                          actionArgs
                        );
                      })()
                    : undefined;
                  if (
                    typeof $steps["runCode"] === "object" &&
                    typeof $steps["runCode"].then === "function"
                  ) {
                    $steps["runCode"] = await __wrapUserPromise(
                      {
                        type: "InteractionLoc",
                        actionName: "customFunction",
                        interactionUuid: "XAxurmS2H",
                        componentUuid: "kUJxIvpnpi"
                      },
                      $steps["runCode"]
                    );
                  }
                }}
                submitsForm={false}
              >
                {"Add"}
              </Button>
            </div>
          ) : null}
          <Button
            data-plasmic-name={"homeButton"}
            data-plasmic-override={overrides.homeButton}
            className={classNames("__wab_instance", sty.homeButton)}
            color={"yellow"}
            link={`/`}
            showEndIcon={true}
            size={"compact"}
          >
            {"Home"}
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: [
    "root",
    "aboutContainer",
    "h1",
    "cmsDataFetcher",
    "cmsEntryField",
    "textInput",
    "button",
    "homeButton"
  ],

  aboutContainer: ["aboutContainer", "h1"],
  h1: ["h1"],
  cmsDataFetcher: ["cmsDataFetcher", "cmsEntryField"],
  cmsEntryField: ["cmsEntryField"],
  textInput: ["textInput"],
  button: ["button"],
  homeButton: ["homeButton"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAbout__ArgProps,
          internalVariantPropNames: PlasmicAbout__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    aboutContainer: makeNodeComponent("aboutContainer"),
    h1: makeNodeComponent("h1"),
    cmsDataFetcher: makeNodeComponent("cmsDataFetcher"),
    cmsEntryField: makeNodeComponent("cmsEntryField"),
    textInput: makeNodeComponent("textInput"),
    button: makeNodeComponent("button"),
    homeButton: makeNodeComponent("homeButton"),
    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps,
    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */

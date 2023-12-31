// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5BwtKaPW69DtLKD2yetQK2
// Component: ttogx4DE1_
import * as React from "react";
import { useRouter } from "next/router";
import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import TextInput from "../../TextInput"; // plasmic-import: kXiqqwWiZ1v/component
import Button2 from "../../Button2"; // plasmic-import: 9xxV7DVn-j/component
import TaskListItem from "../../TaskListItem"; // plasmic-import: 6ge1vqgUce/component
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic_antd_5_hostless.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic_todo_app_practice.module.css"; // plasmic-import: 5BwtKaPW69DtLKD2yetQK2/projectcss
import sty from "./PlasmicTodoList.module.css"; // plasmic-import: ttogx4DE1_/css

export const PlasmicTodoList__VariantProps = new Array();

export const PlasmicTodoList__ArgProps = new Array();

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

function PlasmicTodoList__RenderFunc(props) {
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
  return true ? (
    <div
      data-plasmic-name={"todoList"}
      data-plasmic-override={overrides.todoList}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.todoList
      )}
    >
      {true ? (
        <div
          data-plasmic-name={"formContainer"}
          data-plasmic-override={overrides.formContainer}
          className={classNames(projectcss.all, sty.formContainer)}
        >
          <TextInput
            data-plasmic-name={"textInput"}
            data-plasmic-override={overrides.textInput}
            className={classNames("__wab_instance", sty.textInput)}
            onChange={(...eventArgs) => {
              p.generateStateOnChangeProp($state, ["textInput", "value"])(
                (e => e.target?.value).apply(null, eventArgs)
              );
            }}
            placeholder={"Add a new todo"}
            type={"text"}
            value={
              p.generateStateValueProp($state, ["textInput", "value"]) ?? ""
            }
          />

          <div
            data-plasmic-name={"freeBox"}
            data-plasmic-override={overrides.freeBox}
            className={classNames(projectcss.all, sty.freeBox)}
          >
            <Button2
              data-plasmic-name={"addButton"}
              data-plasmic-override={overrides.addButton}
              className={classNames("__wab_instance", sty.addButton)}
            />
          </div>
        </div>
      ) : null}
      {true ? (
        <p.Stack
          as={"div"}
          data-plasmic-name={"taskList"}
          data-plasmic-override={overrides.taskList}
          hasGap={true}
          className={classNames(projectcss.all, sty.taskList)}
        >
          {true ? (
            <TaskListItem
              className={classNames("__wab_instance", sty.taskListItem__rYChL)}
              task={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__y5Qyz
                  )}
                >
                  {
                    "Item No.1 Item No.1 Item No.1 Item No.1 Item No.1 Item No.1"
                  }
                </div>
              }
            />
          ) : null}
          {true ? (
            <TaskListItem
              className={classNames("__wab_instance", sty.taskListItem__bPi6N)}
              task={
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__tdfTl
                  )}
                >
                  {"HEREHEREHEREHEREHEREHEREHEREHEREHEREHEREEHHEHEHEHHE"}
                </div>
              }
            />
          ) : null}
        </p.Stack>
      ) : null}
    </div>
  ) : null;
}

const PlasmicDescendants = {
  todoList: [
    "todoList",
    "formContainer",
    "textInput",
    "freeBox",
    "addButton",
    "taskList"
  ],

  formContainer: ["formContainer", "textInput", "freeBox", "addButton"],
  textInput: ["textInput"],
  freeBox: ["freeBox", "addButton"],
  addButton: ["addButton"],
  taskList: ["taskList"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicTodoList__ArgProps,
          internalVariantPropNames: PlasmicTodoList__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicTodoList__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "todoList") {
    func.displayName = "PlasmicTodoList";
  } else {
    func.displayName = `PlasmicTodoList.${nodeName}`;
  }
  return func;
}

export const PlasmicTodoList = Object.assign(
  // Top-level PlasmicTodoList renders the root element
  makeNodeComponent("todoList"),
  {
    // Helper components rendering sub-elements
    formContainer: makeNodeComponent("formContainer"),
    textInput: makeNodeComponent("textInput"),
    freeBox: makeNodeComponent("freeBox"),
    addButton: makeNodeComponent("addButton"),
    taskList: makeNodeComponent("taskList"),
    // Metadata about props expected for PlasmicTodoList
    internalVariantProps: PlasmicTodoList__VariantProps,
    internalArgProps: PlasmicTodoList__ArgProps
  }
);

export default PlasmicTodoList;
/* prettier-ignore-end */

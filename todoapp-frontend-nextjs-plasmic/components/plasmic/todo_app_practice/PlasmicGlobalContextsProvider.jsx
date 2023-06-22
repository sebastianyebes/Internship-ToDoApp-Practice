// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5BwtKaPW69DtLKD2yetQK2
import * as React from "react";
import { AntdConfigProvider } from "@plasmicpkgs/antd5/skinny/registerConfigProvider"; // plasmic-import: DmrLLHGTjGTE/codeComponent
import { CmsCredentialsProvider } from "@plasmicpkgs/plasmic-cms"; // plasmic-import: OREVbGCcgN/codeComponent

export default function GlobalContextsProvider(props) {
  const { children, antdConfigProviderProps, cmsCredentialsProviderProps } =
    props;
  return (
    <AntdConfigProvider
      {...antdConfigProviderProps}
      borderRadius={
        antdConfigProviderProps && "borderRadius" in antdConfigProviderProps
          ? antdConfigProviderProps.borderRadius
          : 6
      }
      colorBgBase={
        antdConfigProviderProps && "colorBgBase" in antdConfigProviderProps
          ? antdConfigProviderProps.colorBgBase
          : "#ffffff"
      }
      colorError={
        antdConfigProviderProps && "colorError" in antdConfigProviderProps
          ? antdConfigProviderProps.colorError
          : "#ff4d4f"
      }
      colorInfo={
        antdConfigProviderProps && "colorInfo" in antdConfigProviderProps
          ? antdConfigProviderProps.colorInfo
          : "#1677ff"
      }
      colorPrimary={
        antdConfigProviderProps && "colorPrimary" in antdConfigProviderProps
          ? antdConfigProviderProps.colorPrimary
          : "#1677ff"
      }
      colorSuccess={
        antdConfigProviderProps && "colorSuccess" in antdConfigProviderProps
          ? antdConfigProviderProps.colorSuccess
          : "#52c41a"
      }
      colorWarning={
        antdConfigProviderProps && "colorWarning" in antdConfigProviderProps
          ? antdConfigProviderProps.colorWarning
          : "#faad14"
      }
      controlHeight={
        antdConfigProviderProps && "controlHeight" in antdConfigProviderProps
          ? antdConfigProviderProps.controlHeight
          : 32
      }
      defaultDark={
        antdConfigProviderProps && "defaultDark" in antdConfigProviderProps
          ? antdConfigProviderProps.defaultDark
          : false
      }
      lineWidth={
        antdConfigProviderProps && "lineWidth" in antdConfigProviderProps
          ? antdConfigProviderProps.lineWidth
          : 1
      }
      sizeStep={
        antdConfigProviderProps && "sizeStep" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeStep
          : 4
      }
      sizeUnit={
        antdConfigProviderProps && "sizeUnit" in antdConfigProviderProps
          ? antdConfigProviderProps.sizeUnit
          : 4
      }
      themeStyles={
        antdConfigProviderProps && "themeStyles" in antdConfigProviderProps
          ? antdConfigProviderProps.themeStyles
          : true
          ? {
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "1.5",
              color: "#535353",
              letterSpacing: "normal"
            }
          : undefined
      }
      wireframe={
        antdConfigProviderProps && "wireframe" in antdConfigProviderProps
          ? antdConfigProviderProps.wireframe
          : false
      }
    >
      <CmsCredentialsProvider
        {...cmsCredentialsProviderProps}
        databaseId={
          cmsCredentialsProviderProps &&
          "databaseId" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.databaseId
            : "qBCqgxM7A7MdMrfgJF5NBg"
        }
        databaseToken={
          cmsCredentialsProviderProps &&
          "databaseToken" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.databaseToken
            : "quJYW6cpAZ4zadrKYedjsStvXjyClJ3WYmGdsmuOCiWUybBGtGsBzpd6Bzi6cU8g4qy8h9yHLW7zrdL8EpsCA"
        }
        host={
          cmsCredentialsProviderProps && "host" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.host
            : "https://studio.plasmic.app"
        }
        locale={
          cmsCredentialsProviderProps && "locale" in cmsCredentialsProviderProps
            ? cmsCredentialsProviderProps.locale
            : undefined
        }
      >
        {children}
      </CmsCredentialsProvider>
    </AntdConfigProvider>
  );
}

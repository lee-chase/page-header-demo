import React, { useState } from "react";
import {
  Header,
  HeaderMenuButton,
  HeaderName,
  HeaderGlobalBar,
  HeaderGlobalAction,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent
} from "carbon-components-react";
import Notification20 from "@carbon/icons-react/lib/notification/20";
import UserAvatar20 from "@carbon/icons-react/lib/user--avatar/20";
import AppSwitcher20 from "@carbon/icons-react/lib/app-switcher/20";
import Fade16 from "@carbon/icons-react/lib/fade/16";

export const CommonHeader = ({ className }) => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const handleClickSideNavExpand = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
  };

  return (
    <Header aria-label="Carbon Tutorial" className={className}>
      <SkipToContent />
      <HeaderMenuButton
        aria-label="Open menu"
        isCollapsible
        onClick={handleClickSideNavExpand}
        isActive={isSideNavExpanded}
      />
      <HeaderName to="/" prefix="IBM">
        Cloud PAK Automation Hub
      </HeaderName>
      <HeaderGlobalBar>
        <HeaderGlobalAction aria-label="Notifications">
          <Notification20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="User Avatar">
          <UserAvatar20 />
        </HeaderGlobalAction>
        <HeaderGlobalAction aria-label="App Switcher">
          <AppSwitcher20 />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav aria-label="Side navigation" isRail expanded={isSideNavExpanded}>
        <SideNavItems>
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade16} title="Category title">
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
            <SideNavMenuItem aria-current="page" href="javascript:void(0)">
              Link
            </SideNavMenuItem>
            <SideNavMenuItem href="javascript:void(0)">Link</SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
            Link
          </SideNavLink>
          <SideNavLink renderIcon={Fade16} href="javascript:void(0)">
            Link
          </SideNavLink>
        </SideNavItems>
      </SideNav>{" "}
      */}
    </Header>
  );
};

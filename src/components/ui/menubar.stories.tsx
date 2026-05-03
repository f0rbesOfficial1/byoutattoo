import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { useState } from "react";

import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "./menubar";

const meta: Meta<typeof Menubar> = {
  title: "UI/Menubar",
  component: Menubar,
};

export default meta;
type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>File</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            New tab <MenubarShortcut>{"⌘T"}</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            New window <MenubarShortcut>{"⌘N"}</MenubarShortcut>
          </MenubarItem>
          <MenubarItem disabled>New incognito window</MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Share</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Email link</MenubarItem>
              <MenubarItem>Messages</MenubarItem>
              <MenubarItem>Notes</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>
            Print <MenubarShortcut>{"⌘P"}</MenubarShortcut>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Edit</MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            Undo <MenubarShortcut>{"⌘Z"}</MenubarShortcut>
          </MenubarItem>
          <MenubarItem>
            Redo <MenubarShortcut>{"⇧⌘Z"}</MenubarShortcut>
          </MenubarItem>
          <MenubarSeparator />
          <MenubarSub>
            <MenubarSubTrigger>Find</MenubarSubTrigger>
            <MenubarSubContent>
              <MenubarItem>Search the web</MenubarItem>
              <MenubarItem>Find...</MenubarItem>
              <MenubarItem>Find next</MenubarItem>
              <MenubarItem>Find previous</MenubarItem>
            </MenubarSubContent>
          </MenubarSub>
          <MenubarSeparator />
          <MenubarItem>Cut</MenubarItem>
          <MenubarItem>Copy</MenubarItem>
          <MenubarItem>Paste</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>View</MenubarTrigger>
        <ViewMenuContent />
      </MenubarMenu>
      <MenubarMenu>
        <MenubarTrigger>Profiles</MenubarTrigger>
        <ProfilesMenuContent />
      </MenubarMenu>
    </Menubar>
  ),
};

function ViewMenuContent() {
  const [bookmarks, setBookmarks] = useState(true);
  const [fullUrls, setFullUrls] = useState(false);
  return (
    <MenubarContent>
      <MenubarCheckboxItem
        checked={bookmarks}
        onCheckedChange={setBookmarks}
      >
        Always show bookmarks
      </MenubarCheckboxItem>
      <MenubarCheckboxItem
        checked={fullUrls}
        onCheckedChange={setFullUrls}
      >
        Always show full URLs
      </MenubarCheckboxItem>
      <MenubarSeparator />
      <MenubarItem>
        Reload <MenubarShortcut>{"⌘R"}</MenubarShortcut>
      </MenubarItem>
      <MenubarItem>Toggle fullscreen</MenubarItem>
      <MenubarItem>Hide sidebar</MenubarItem>
    </MenubarContent>
  );
}

function ProfilesMenuContent() {
  const [profile, setProfile] = useState("anna");
  return (
    <MenubarContent>
      <MenubarRadioGroup value={profile} onValueChange={setProfile}>
        <MenubarRadioItem value="anna">Anna</MenubarRadioItem>
        <MenubarRadioItem value="jules">Jules</MenubarRadioItem>
        <MenubarRadioItem value="lina">Lina</MenubarRadioItem>
      </MenubarRadioGroup>
      <MenubarSeparator />
      <MenubarItem>Manage profiles</MenubarItem>
    </MenubarContent>
  );
}

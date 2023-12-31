import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { MenuIcon, MoreVerticalIcon, SearchIcon } from "../Icons/Icons";
import { headerStyles } from "../mainStyles";
import { NoteDispathContext } from "../../context/noteContext";
import { TOGGLE_MORE_OPTIONS, TOGGLE_SIDE_BAR } from "../../context/constants";
const Header = () => {
  const dispatch = useContext(NoteDispathContext);

  const openMoreOptions = () => {
    dispatch({
      type: TOGGLE_MORE_OPTIONS,
      payload: {
        show: true,
      },
    });
  };

  const openSideBar = () => {
    dispatch({
      type: TOGGLE_SIDE_BAR,
      payload: {
        show: true,
      },
    });
  };

  return (
    <View style={headerStyles.header}>
      <TouchableOpacity onPress={openSideBar}>
        <MenuIcon />
      </TouchableOpacity>
      <Text style={headerStyles.title}>All notes</Text>
      <View style={headerStyles.headerRight}>
        <SearchIcon />
        <TouchableOpacity onPress={openMoreOptions}>
          <MoreVerticalIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

import { Home, Profile, New } from "../screens";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

const TabNavigator = createBottomTabNavigator({
  Home: Home,
  Profile: Profile,
  New: New
});

const Navigator = createAppContainer(TabNavigator);

export { Navigator };

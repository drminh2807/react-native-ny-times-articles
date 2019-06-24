import { createAppContainer, createStackNavigator } from "react-navigation";
import ArticleList from "../screens/ArticleList";

export default createAppContainer(createStackNavigator({
  ArticleList,
},{
  headerMode: 'none'
}))
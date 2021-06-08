import React from 'react';
import { MaterialIcons } from '@expo/vector-icons'

import { useTheme } from 'styled-components'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Dashboard } from '../screens/Dashboard'
import { Home } from '../screens/Home'
import { Login } from '../screens/Login';
import { CategoryDetails } from '../screens/CategoryDetails';
import { Recipe } from '../screens/Recipe';

const { Navigator, Screen } = createBottomTabNavigator()

export function AppRoutes() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={({ route }) => ({
                tabBarButton: [
                "CategoryDetails",
                "Recipe"
                ].includes(route.name)
                ? () => {
                    return null;
                    }
                : undefined,
            })}
            tabBarOptions={{
                activeTintColor: theme.colors.primary_text,
                inactiveTintColor: theme.colors.secondary_text,
                showLabel: false
            }}
        >
            <Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <Screen 
                name="Dashboard"
                component={Dashboard}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

            <Screen 
                name="Login"
                component={Login}
                options={{
                    tabBarIcon: (({size, color}) => (
                        <MaterialIcons
                            name="supervised-user-circle"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />

        <Screen name="CategoryDetails" component={CategoryDetails} />
        <Screen name="Recipe" component={Recipe} />
        </Navigator>
    )
}

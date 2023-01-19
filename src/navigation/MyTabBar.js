import { View, Text, Pressable, Center, useColorModeValue } from 'native-base';
import { StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import { useSelector } from 'react-redux';

let Icons = {
    home: "home",
    search: "search",
    searc1h: "search",
}

function MyTabBar({ state, descriptors, navigation }) {
    const show = useSelector(e=>e?.scroll?.showBottomTab)
    let c_bg = useColorModeValue("primary.100", "primary.900")
    let active_c = useColorModeValue("#000", "#fff")
    let inactive_c = useColorModeValue("#444", "#ddd")
    return (
        <View bg={c_bg}
            // display={show?"flex":"none"}
            marginBottom={show?0:-50}
            style={styles.tabContainer}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <Pressable
                        key={options.tabBarTestID+label}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        // onLongPress={onLongPress}
                        style={styles.tab}
                    >
                        <Center h={"full"}
                            background={c_bg} >
                            <View bg={isFocused ? active_c : c_bg}
                                position={"absolute"}
                                bottom={0}
                                borderRadius={4}
                                w={8} h={1} />
                            <Icon name={Icons[label]} color={isFocused ? active_c : inactive_c} size={22} />
                        </Center>
                    </Pressable>
                );
            })}
        </View>
    );
}

export default MyTabBar

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        height: 50,
    },
    tab: {
        flex: 1,
        paddingBottom: 1,
        alignItems: "center"
    }
})
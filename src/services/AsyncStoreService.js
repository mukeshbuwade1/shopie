import AsyncStorage from '@react-native-async-storage/async-storage';
export default {
    _setItem: async (key, value) => {
        try {
            await AsyncStorage.setItem(key, value);
            return { message: "data saved" }
        } catch (e) {
            return { errMsg: e ?? "data not saved" }
        }
    },

    _getItem: async (key) => {
        try {
            return await AsyncStorage.getItem(key)
        } catch (e) {
            return { errMsg: e ?? "data not saved" }
        }
    },

    _getMultiple: async (keys) => {

        let values
        try {
            values = await AsyncStorage.multiGet(keys)
            return values
        } catch (e) {
            return { errMsg: e ?? "data not saved" }
        }
    },

    _removeItem: async (key) => {
        removeValue = async () => {
            try {
                await AsyncStorage.removeItem(key)
            } catch (e) {
                // remove error
            }
        }
    },

    _clearAll: async () => {
        try {
            await AsyncStorage.clear()
        } catch (e) {
            // clear error
        }
    }
}
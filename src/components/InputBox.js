import { View, Text } from 'react-native'
import React from 'react'
import { useForm, Controller } from "react-hook-form";
import { Input } from 'native-base';
import Icon from 'react-native-vector-icons/dist/Ionicons';


const InputBox = (props) => {
    const {fieldName,placeholder, iconName,iconTintColor, type,control,errors}=props
    return (
        <View>
            <Controller
                control={control}
                rules={{
                    required: true,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <Input
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        type={type??'text'}
                        placeholder={placeholder??'placeholder text'}
                        variant={"underlined"} 
                        borderBottomColor={"primary.500"}
                        color={"primary.700"}
                        InputLeftElement={
                            <Icon name={iconName??null} size={20} color={iconTintColor??"primary.500"} />
                        }
                        pl={3}
                    />
                )}
                name={fieldName ??"field name"}
            />
            {errors[fieldName] && <Text>This is required.</Text>}
        </View>
    )
}

export default InputBox
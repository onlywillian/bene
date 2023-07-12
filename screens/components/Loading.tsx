import { View, Text } from 'react-native';

export default function Loading() {
    return (
        <View style={{flex: 1}}>
            <Text style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>Carregando Produtos...</Text>
        </View>
    )
}
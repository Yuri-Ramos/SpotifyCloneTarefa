import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

interface IloginButtonProps {
    title: string;
    icon?: any;
    color: "primary" | "secondary" | "clear";

}

export const LoginButton = (props: IloginButtonProps) => {
    const { title, icon, color } = props;

    const containerStyle: ViewStyle[] = [styles.container];
    const titleStyle: TextStyle[] = [styles.title];

    if (color === "primary"){
        containerStyle.push(styles.conteinerPrimary);
        titleStyle.push(styles.titlePrimary);
     }else if (color === "secondary"){
        containerStyle.push(styles.conteinerSecundary);
        titleStyle.push(styles.titleSecundary);
     } else if (color === "clear"){
        containerStyle.push(styles.conteinerClear);
        titleStyle.push(styles.titleClear);

     }

    return (
        <View style={containerStyle}>
            {/* adicionando style no icone */}
            {icon && <View style={styles.iconContainer}>{icon}</View>}
            <Text style={titleStyle}> {title} </Text>
        </View>
    )
}
const styles = StyleSheet.create({
    iconContainer:{

    },
    container: {
        padding: 12,    // espaçamento
        borderWidth: 1, 
        borderColor: '#fff',
        borderRadius: 50, //arredondamento da margem ()
        alignItems: 'center',
        justifyContent: 'space-evenly',
        margin: 5,
        flexDirection:'row', //flex-direction manter icone e frases na mesma linha
    },
    title: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    titlePrimary: {
        color: "#121212",
    },

    conteinerPrimary:{
        backgroundColor: '#65d46e', // color de fundo
        borderColor: '#65d46e', // color da borda
        borderWidth: 1,    // largura da linha da borda
    },
    titleSecondary:{
        color: "#fff",
    },
    conteinerSecondary:{
        backgroundColor: '#121212',
        borderColor: '#fff', // color da borda
        borderWidth: 1,    // largura da linha da borda
    },
    titleClear :{

    },
    conteinerClear : {
        backgroundColor: '#121212',
        borderWidth: 0,    // largura da linha da borda
    },
});

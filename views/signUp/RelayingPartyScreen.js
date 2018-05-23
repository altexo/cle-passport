import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button  } from "react-native";

class RelayingPartyScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Relaying Party</Text>
                    <Text style={styles.subtittleText}>Claim Tittle</Text>
                </View>
                <ScrollView style={styles.termsSection}>
                    <Text style={styles.termsText}>
                        ¿Por qué lo usamos?
                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                        {"\n"}{"\n"}
                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                        {"\n"}{"\n"}
                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                        {"\n"}{"\n"}
                        Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de "Lorem Ipsum" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo).
                    </Text>
                </ScrollView>
                <View style={styles.buttonContainer}>
                <Text style={{color: 'blue',textAlign: 'center', fontSize: 20}}
                    onPress={() => Linking.openURL('http://google.com')}>
                Details..
                </Text>
                    <Button style={styles.buttonStyle}
                        title="Apply Now"
                    />
                </View>
            </View>
        );
    }
} 

export default RelayingPartyScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
        
    },
    header:{
        //backgroundColor: 'green'
    },
    headerText:{
        fontSize: 25
    },
    subtittleText:{
        fontSize: 20,
        textAlign: 'center'
    },
    termsSection:{
        //flex: 2,
        margin: 10,
        height: 390,
        //backgroundColor: 'red'
    },
    buttonContainer:{
        flex: 1,
       // alignItems: 'flex-end',
       alignSelf: 'stretch',
       // backgroundColor: 'blue'
       textAlign: 'center'
    },
    buttonStyle:{
        
        alignItems: 'stretch'
    },
    termsText:{
        margin: 10
    }
});
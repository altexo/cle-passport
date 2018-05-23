import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Button, FlatList  } from "react-native";

class AuthorizeScreen extends Component{
    render(){
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerText}>Authorize</Text>
                    <Text style={styles.subtittleText}>Relaying party wants to access the following information:</Text>
                   
                </View>
                <View style={styles.listContainer}>
                    <FlatList style={styles.permisionText}
                        data={[
                            {key: 'Name'},
                            {key: 'Last Name'},
                            {key: 'Gender'},
                            {key: 'Address'},
                        ]}
                        renderItem={({item}) => <Text style={styles.item}>{'\u2022'}{item.key}</Text>}
                    />
                </View>
                <View style={styles.header}>
                    <Text style={styles.subtittleText}>Privacy Advice</Text>
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
 
                    <Button style={styles.buttonStyle}
                        title="Accept"
                    />
                </View>
            </View>
        );
    }
} 

export default AuthorizeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
        
    },
    item:{
        textAlign: 'left',
        fontSize: 15
    },
    header:{
        //backgroundColor: 'green'
    },
    listContainer: {
        flex: 2,
    },
    headerText:{
        fontSize: 25,
        textAlign: 'center'

    },
    subtittleText:{
        fontSize: 20,
        textAlign: 'center'
    },
    permisionText:{
        fontSize: 20,
        textAlign: 'left',
       
    },
    termsSection:{
        //flex: 2,
        margin: 10,
        height: 200,
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
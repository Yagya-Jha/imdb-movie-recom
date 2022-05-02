import * as React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import { Card } from 'react-native-elements';
import axios from 'axios';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Popular_movies extends React.Component{
    constructor(){
        super();
        this.state={data: []};
    }
    convert_time(time){
        var h = Math.floor(time/60);
        var m = time%60;

        return `${h} hours ${m} minutes`
    }
    get_data=()=>{
        const url = 'http://127.0.0.1:5000/popularmovies';
        axios.get(url).then(async response=>{
            this.setState({data: response.data.data});
        }).catch(e=>{
            console.log(e.message);
        });
    }
    componentDidMount(){
        this.get_data();
    }

    keyExtractor = (item, index)=>index.toString();
    renderitems=({item, index})=>{
        return(
            <Card
                key={`card-${index}`}
                image={{uri: item.poster_link}}
                imageProps={{resizeMode: 'cover'}}
                featuredTitle={item.title}
                containerStyle={styles.cardcontainer}
                featuredTitleStyle={styles.title}
                featuredSubtitle={`${item.release_date.split("-")[0]} | ${this.convert_time(item.runtime)}`}
                featuredSubtitleStyle={styles.subtitle}
            >
            </Card>
        );
    }

    render(){
        const {data}=this.state;
        return(
            <View style={{flex: 1}}>
                <FlatList 
                    data={data}
                    keyExtractor={this.keyextractor}
                    renderItem={this.renderitems}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardcontainer: {
        flex: 1,
        borderRadius: RFValue(10),
        justifyContent: 'center',
        height: RFValue(100),
        marginBottom: RFValue(20)
    },
    title: {
        color: 'black',
        alignSelf: 'flex-start',
        paddingLeft: RFValue(15),
        fontSize: RFValue(25),
        marginTop: RFValue(65)
    },
    subtitle: {
        alignSelf: 'flex-start',
        paddingLeft: RFValue(15),
        fontSize: RFValue(15),
        fontWeight: 'bold'
    }
});
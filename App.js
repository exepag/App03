import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image, ActivityIndicator} from 'react-native'
import axios from 'axios'

export default class App extends Component {
	componentDidMount() {
		this.getProducts()
	}
	
	state = {
	dataProducts:[]
	}

	getProducts = () => {
		console.log('functions getProducts dipanggil')
		axios.get('http://172.104.50.9:3000/api/shoppinglists')
		.then (response => {
			console.log(response)
			this.setState({dataProducts: response.data})
		})
		.catch (err => {
			console.log(err)
		})
	}

	render () {
		console.log(this.state.dataProducts)
		return (
			<View>
				{ this.state.dataProducts.length === 0 ? (
					<ActivityIndicator style={{marginTop:50 }} size="large" />  ) : (
					
					this.state.dataProducts.map((dataku,index) =>
						<View key={index} style={{margin:10}}>
							<Image style={{width:50, height:50 }} source={{uri:dataku.image}} />
							<Text>
								{dataku.product_name}
							</Text>
						</View>
					)
				)}
			</View>
		)
	}
	
	static navigationOptions = {
		header: null
	}
}


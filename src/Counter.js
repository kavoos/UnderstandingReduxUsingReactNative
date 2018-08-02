import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { connect } from 'react-redux';

class Counter extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.increaseCounter()}>
                    <Text>Increase</Text>
                </TouchableOpacity>
                <Text>{this.props.counter}</Text>
                <TouchableOpacity onPress={() => this.props.decreaseCounter()}>
                    <Text>Decrease</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increaseCounter: () => dispatch({ type: 'INCREASE_COUNTER' }),
        decreaseCounter: () => dispatch({ type: 'DECREASE_COUNTER' }),
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

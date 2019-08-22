

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {
    Placeholder,
    PlaceholderMedia,
    PlaceholderLine,
    Fade, Shine, ShineOverlay
} from "rn-placeholder";

class LoadingKind extends Component {
    constructor(props) {
        super(props);

    }
    render() {


        return (

                <Placeholder>
                    <Placeholder
                        Left={
                            props => (
                                <PlaceholderLine
                                    Animation={ShineOverlay}
                                    width={40}
                                    height={20}
                                    style={{
                                        margin: 10,
                                    }}
                                />
                            )
                        }
                        

                        Animation={Shine}
                    >

                    </Placeholder>
                    <Placeholder
                        Left={
                            props => (
                                <PlaceholderMedia
                                    Animation={ShineOverlay}
                                    size={160}
                                    style={{
                                        margin: 10,
                                    }}
                                />
                            )
                        }
                        Right={
                            props => (
                                <PlaceholderMedia
                                    Animation={ShineOverlay}
                                    size={160}
                                    style={{
                                        margin: 10,
                                    }}
                                />
                            )
                        }

                        Animation={Shine}
                    >

                    </Placeholder>

                    <Placeholder
                        Left={
                            props => (
                                <PlaceholderMedia
                                    Animation={ShineOverlay}
                                    size={160}
                                    style={{
                                        margin: 10,
                                    }}
                                />
                            )
                        }
                        Right={
                            props => (
                                <PlaceholderMedia
                                    Animation={ShineOverlay}
                                    size={160}
                                    style={{
                                        margin: 10,
                                    }}
                                />
                            )
                        }

                        Animation={Shine}
                    >

                    </Placeholder>

                    <Placeholder
                        Left={
                            props => (
                                <PlaceholderMedia
                                    Animation={ShineOverlay}
                                    size={160}
                                    style={{
                                        margin: 10,
                                    }}
                                />
                            )
                        }
                        Right={
                            props => (
                                <PlaceholderMedia
                                    Animation={ShineOverlay}
                                    size={160}
                                    style={{
                                        margin: 10,
                                    }}
                                />
                            )
                        }

                        Animation={Shine}
                    >

                    </Placeholder>
                </Placeholder>
            
        )
    }
}

export { LoadingKind }
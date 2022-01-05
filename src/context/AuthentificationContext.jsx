import * as React from 'react';
import {createContext} from "react";

export const AuthentificationContext = createContext(({
    authData: {},
    setAuthData: value => {}
}));


import {ActionTypes} from './types';
import {endpoints} from "../constant/endpoints";
import {RestRequest} from "../services/requestServices";


export const loadData = dataType => dispatch => {
    RestRequest.get(endpoints.getToppings()).then(response => {
        dispatch({
            type: ActionTypes.DATA_LOAD,
            payload: {
                dataType,
                data: response.data.toppings
            }
        });

    })
};
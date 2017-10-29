import { StyleSheet } from 'react-native';
import { Colors, Metrics, Fonts } from '../../Themes/index';

const ResetPasswordStyles = {
    subTitle: {
        alignSelf: 'center',
        color: Colors.text,
        fontFamily: Fonts.type.OpenSans,
    },
    resetPasswordForm: {
        flex: 1,
        margin: Metrics.MARGIN, 
        padding: Metrics.PADDING, 
        borderRadius: 4, 
        borderWidth: 1, 
        borderColor: Colors.stoikOrange,
        justifyContent: 'space-between',        
    },
};

export default ResetPasswordStyles;

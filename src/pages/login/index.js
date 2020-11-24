import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { LoginWrapper, LoginBox, Input, Button } from './style';
import { actionCreators } from './store';

class Login extends PureComponent {
	constructor(props) {
		super(props)
		this.accountRef = React.createRef();
		this.passwordRef = React.createRef();
	}
	render() {
		const { loginStatus } = this.props;
		if (!loginStatus) {
			return (
				<LoginWrapper>
					<LoginBox>
						<Input placeholder="账号" ref={this.accountRef}/>
						<Input placeholder="密码" ref={this.passwordRef} type="password"/>
						<Button onClick={() => this.props.login(this.accountRef.current.value, this.passwordRef.current.value)}>登陆</Button>
					</LoginBox>
				</LoginWrapper>
			)
		}else {
			return <Redirect to="/"/>
		}
	}
}

const mapState = (state) => ({
	loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
	login(account, password) {
		console.log(account, password)
		dispatch(actionCreators.login(account, password))
	}
})

export default connect(mapState, mapDispatch)(Login);
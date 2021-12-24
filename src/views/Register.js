import React, {useState} from 'react';
import { Header, Button, Input, Form } from 'semantic-ui-react';



const Register = (props) => {
  const [pageTitle, setPageTitle] = useState(document.title);
  var link = document.location.href;

  const onCancel = (e) => {
    e.preventDefault();
    const {setPageName} = props;
    setPageName("Home");
  }

  const onChange = (e, data) => {
    e.preventDefault();
    setPageTitle(data.value);
    
  }

  const onRegister = (e) => {
    console.log(link, pageTitle);
  }

  return (
    <Form>
      <Header as='h3'>북마크 추가</Header>
      <Form.Field>
        <label>이름</label>
        <Input onChange={onChange} id='url' />
      </Form.Field>
      <Button type='submit' onClick={onRegister}>등록</Button>
      <Button type="cancel" onClick={onCancel}>취소</Button>
    </Form>
  )
};

export default Register;
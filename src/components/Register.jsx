import { Button, Form, FormGroup, Input, Label } from "reactstrap"

export default function Register () {
   return 
   <Form>
  <FormGroup>
    <Label for="ad">
      Ad:
    </Label>
    <Input
      id="ad"
      name="ad"
      placeholder="Adınızı Giriniz"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="soyad">
      Soyad:
    </Label>
    <Input
      id="Soyad"
      name="soyad"
      placeholder="Soyadınızı Giriniz"
      type="text"
    />
  </FormGroup>
  <FormGroup>
    <Label for="email">
      Email:
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Kurumsal email adresinizi giriniz"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="password">
      Password:
    </Label>
    <Input
      id="password"
      name="password"
      placeholder="Güçlü bir password seçiniz"
      type="password"
    />
  </FormGroup>

  <Button>
    Kayıt Ol
  </Button>
</Form>

}
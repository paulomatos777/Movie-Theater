import { MDBFooter, MDBContainer, MDBBtn } from "mdb-react-ui-kit";
import {
  FiFacebook,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";
import { Container } from "./styles";

export default function App() {
  return (
    <Container>
      <MDBFooter className="footer bg-primary text-center text-white">
        <MDBContainer className="p-4 pb-0">
          <section className="mb-4">
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <FiFacebook />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <FiTwitter />
            </MDBBtn>
            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <FiInstagram />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <FiLinkedin />
            </MDBBtn>

            <MDBBtn
              outline
              color="light"
              floating
              className="m-1"
              href="#!"
              role="button"
            >
              <FiGithub />
            </MDBBtn>
          </section>
        </MDBContainer>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(1, 33, 48, 0.2)" }}
        >
          © 2023 Copyright:
          <a
            className="text-white"
            href="https://www.linkedin.com/in/paulomatos77/"
          >
            Paulo Matos
          </a>
        </div>
      </MDBFooter>
    </Container>
  );
}

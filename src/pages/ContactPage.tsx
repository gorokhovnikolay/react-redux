import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { store } from "src/apps/store/store";
import { observer } from "mobx-react-lite";

export const ContactPage = observer(() => {
  const { contactId } = useParams<{ contactId: string }>();

  useEffect(() => {
    if (contactId) {
      store.getCurrentContacts(contactId);
    }
  }, [contactId]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {store.contact ? <ContactCard contact={store.contact} /> : <Empty />}
      </Col>
    </Row>
  );
});

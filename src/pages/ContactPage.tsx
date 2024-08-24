import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { useAppDispatch, useAppSelector } from "src/apps/store/hooks/hooks";
import { currentContact } from "src/apps/store/ducks/currentContact";

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const contacts = useAppSelector((s) => s.contacts);
  const contact = useAppSelector((s) => s.contact);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (contacts && contactId) {
      dispatch(currentContact({ contacts, contactId }));
    }
  }, [contactId, contacts, dispatch]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};

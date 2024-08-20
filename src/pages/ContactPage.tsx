import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { useAppSelector } from "src/apps/store/hooks/hooks";

export const ContactPage = () => {
  const { contactId } = useParams<{ contactId: string }>();
  const [contact, setContact] = useState<ContactDto>();
  const contactsState = useAppSelector((s) => s.contact);

  useEffect(() => {
    setContact(() => contactsState.find(({ id }) => id === contactId));
  }, [contactId, contactsState]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};

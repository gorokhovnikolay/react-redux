import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";

export const FavoritListPage = memo(() => {
  const favoriteContacts = [] as ContactDto[];

  return (
    <Row xxl={4} className="g-4">
      {favoriteContacts &&
        favoriteContacts.map((contact) => (
          <Col key={contact.id}>
            <ContactCard contact={contact} withLink />
          </Col>
        ))}
    </Row>
  );
});

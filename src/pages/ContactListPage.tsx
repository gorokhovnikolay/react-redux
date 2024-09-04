import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { store } from "src/apps/store/store";
import { observer } from "mobx-react-lite";

export const ContactListPage = observer(() => {
  useEffect(() => {
    store.getContacts();
    store.getGroups();
  }, []);

  const onSubmit = async (fv: Partial<FilterFormValues>) => {
    if (fv.groupId === "Open this select menu" && !fv.name) {
      await store.getContacts();
    } else {
      await store.getContacts();
      store.filterContacts(fv);
    }
  };
  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {store.contacts.map((contact) => {
            return (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            );
          })}
        </Row>
      </Col>
    </Row>
  );
});

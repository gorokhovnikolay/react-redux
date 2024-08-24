import { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";
import { useAppDispatch, useAppSelector } from "src/apps/store/hooks/hooks";
import {
  filterContactsReducer,
  useGetContactsQuery,
} from "src/apps/store/ducks/contacts";
import { useGetGroupsQuery } from "src/apps/store/ducks/groups";

export const ContactListPage = memo(() => {
  const dispatch = useAppDispatch();
  const { data: groupContactsState } = useGetGroupsQuery();
  const { data: dataContacts } = useGetContactsQuery();
  const contacts = useAppSelector((s) => s.contacts);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (fv.groupId === "Open this select menu" && fv.name === "") {
    }
    dispatch(filterContactsReducer({ fv, groupContactsState, dataContacts }));
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts &&
            contacts.map((contact) => (
              <Col key={contact.id}>
                <ContactCard contact={contact} withLink />
              </Col>
            ))}
        </Row>
      </Col>
    </Row>
  );
});

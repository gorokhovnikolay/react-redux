import { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { FilterForm, FilterFormValues } from "src/components/FilterForm";

import { useAppDispatch, useAppSelector } from "src/apps/store/hooks/hooks";
import {
  filterContactsReducer,
  useGetContactsMutMutation,
  useGetGroupsMutation,
} from "src/apps/store/reducers";

export const ContactListPage = memo(() => {
  const dispatch = useAppDispatch();
  const contacts = useAppSelector((s) => s.contacts);
  const groupContactsState = useAppSelector((s) => s.groups);

  const [mutation] = useGetContactsMutMutation();
  const [getGroup] = useGetGroupsMutation({ fixedCacheKey: "key" });

  useEffect(() => {
    mutation("123");
    getGroup();
  }, [mutation, getGroup]);

  const onSubmit = (fv: Partial<FilterFormValues>) => {
    if (fv.groupId === "Open this select menu" && fv.name === "") {
      mutation("123");
    }
    dispatch(filterContactsReducer({ fv, groupContactsState }));
  };

  return (
    <Row xxl={1}>
      <Col className="mb-3">
        <FilterForm initialValues={{}} onSubmit={onSubmit} />
      </Col>
      <Col>
        <Row xxl={4} className="g-4">
          {contacts.map((contact) => (
            <Col key={contact.id}>
              <ContactCard contact={contact} withLink />
            </Col>
          ))}
        </Row>
      </Col>
    </Row>
  );
});

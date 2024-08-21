import { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useAppDispatch, useAppSelector } from "src/apps/store/hooks/hooks";
import { groupPageReducer } from "src/apps/store/reducers/groupPageReducer";
import { contactsListByGroupReducer } from "src/apps/store/reducers/contactsListByGroupReducer";

export const GroupPage = memo(() => {
  const dispatch = useAppDispatch();
  const { groupId } = useParams<{ groupId: string }>();

  const groupContactsState = useAppSelector((s) => s.groups);
  const contactsState = useAppSelector((s) => s.contacts);
  const groupContacts = useAppSelector((s) => s.group);
  const contacts = useAppSelector((s) => s.groupContacts);

  useEffect(() => {
    dispatch(groupPageReducer({ groupId, groupContactsState }));
    if (groupContacts.contactIds) {
      dispatch(contactsListByGroupReducer({ groupContacts, contactsState }));
    }
  }, [dispatch, groupId, contactsState, groupContacts, groupContactsState]);

  return (
    <Row className="g-4">
      {groupContacts ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                {groupContacts.contactIds && (
                  <GroupContactsCard groupContacts={groupContacts} />
                )}
              </Col>
            </Row>
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
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});

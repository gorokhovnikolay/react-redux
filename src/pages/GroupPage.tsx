import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";

import { store } from "src/apps/store/store";
import { observer } from "mobx-react-lite";

export const GroupPage = observer(() => {
  const { groupId } = useParams<{ groupId: string }>();

  useEffect(() => {
    if (groupId) {
      store.getCurrentGroup(groupId);
    }
  }, [groupId]);

  return (
    <Row className="g-4">
      {store.group ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                {store.group.contactIds && (
                  <GroupContactsCard groupContacts={store.group} />
                )}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {store.group?.contactIds &&
                store.group.contactIds.map((id) => {
                  const contact = store.contacts.find((item) => item.id === id);
                  return contact ? (
                    <Col key={id}>
                      <ContactCard contact={contact} withLink />
                    </Col>
                  ) : null;
                })}
            </Row>
          </Col>
        </>
      ) : (
        <Empty />
      )}
    </Row>
  );
});

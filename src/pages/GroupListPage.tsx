import { useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";

import { store } from "src/apps/store/store";
import { observer } from "mobx-react-lite";

export const GroupListPage = observer(() => {
  useEffect(() => {
    store.getGroups();
  }, []);
  return (
    <Row xxl={4}>
      {store.groups &&
        store.groups.map((groupContacts) => (
          <Col key={groupContacts.id}>
            <GroupContactsCard groupContacts={groupContacts} withLink />
          </Col>
        ))}
    </Row>
  );
});

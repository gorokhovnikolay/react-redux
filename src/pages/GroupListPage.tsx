import React, { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { useAppSelector } from "src/apps/store/hooks/hooks";
import { useGetGroupsMutation } from "src/apps/store/reducers";

export const GroupListPage = memo(() => {
  const groupContactsState = useAppSelector((s) => s.groups);
  const [getGroup] = useGetGroupsMutation({ fixedCacheKey: "key" });

  useEffect(() => {
    getGroup();
  }, [getGroup]);

  return (
    <Row xxl={4}>
      {groupContactsState.map((groupContacts) => (
        <Col key={groupContacts.id}>
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});

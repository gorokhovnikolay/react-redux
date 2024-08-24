import { memo, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { Empty } from "src/components/Empty";
import { ContactCard } from "src/components/ContactCard";
import { useGetGroupsQuery } from "src/apps/store/ducks/groups";
import { useAppDispatch, useAppSelector } from "src/apps/store/hooks/hooks";
import { curentGroup } from "src/apps/store/ducks/currentGroup";

export const GroupPage = memo(() => {
  const { groupId } = useParams<{ groupId: string }>();
  const dispatch = useAppDispatch();
  const group = useAppSelector((s) => s.group);
  const contacts = useAppSelector((s) => s.contacts);
  const { data: groups } = useGetGroupsQuery();

  useEffect(() => {
    if (groupId && groups) {
      dispatch(curentGroup({ groupId, groups }));
    }
  }, [groupId, groups, dispatch]);

  return (
    <Row className="g-4">
      {group ? (
        <>
          <Col xxl={12}>
            <Row xxl={3}>
              <Col className="mx-auto">
                {group.contactIds && (
                  <GroupContactsCard groupContacts={group} />
                )}
              </Col>
            </Row>
          </Col>
          <Col>
            <Row xxl={4} className="g-4">
              {group.contactIds &&
                group.contactIds.map((id) => {
                  const contact = contacts.find((item) => item.id === id);
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
